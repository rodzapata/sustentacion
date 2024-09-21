package com.serviparamo.api_rest.service;

import com.serviparamo.api_rest.conf.Constants;
import com.serviparamo.api_rest.dto.UserDto;
import com.serviparamo.api_rest.entity.RolEntity;
import com.serviparamo.api_rest.entity.UserEntity;
import com.serviparamo.api_rest.exception.EmailNotValidException;
import com.serviparamo.api_rest.exception.ResourceNotFoundException;
import com.serviparamo.api_rest.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;
    @Autowired
    private RolService rolService;

    //@Autowired
    //private PasswordEncoder passwordEncoder;

    public UserEntity findByEmail(String email) {
        return this.repository.findByEmail(email);
    }
    public String generateRandomPassword() {
        // Generar una contraseña aleatoria (8 caracteres)
        return UUID.randomUUID().toString().substring(0, 8);
    }

    public boolean actualizarPassword(UserDto userDto) {
        Optional<UserEntity> userOpt = Optional.ofNullable(repository.findByEmail(userDto.getEmail()));

        if (userOpt.isPresent()) {
            UserEntity user = userOpt.get();
            user.setPassword(userDto.getPassword());  // Aquí puedes usar alguna función de encriptación si es necesario
            repository.save(user); // Guarda los cambios en la base de datos
            return true;
        } else {
            return false; // Usuario no encontrado
        }
    }


    /*
    public void updatePassword(UserEntity dto, String newPassword) {
        dto.setPassword(passwordEncoder.encode(newPassword)); // Encriptar la contraseña
        //repository.save(user);

        UserEntity entity = new UserEntity();
        entity.setPassword(dto.getPassword());
        repository.save(entity);
    }
*/
    public boolean validateByEmail(String email) {
        UserEntity entity = this.repository.findByEmail(email);
        if(Objects.isNull(entity)) {
            return false;
        }
        return true;
    }
    //Codigo anterior
    /*
    public boolean validarCredenciales(String username, String password) {
        UserEntity entity = this.repository.findByEmail(username);
        if(Objects.isNull(entity)) {
            return false;
        }

        if (!entity.getPassword().equals(password)) {
            return false;
        }
        return true;
    }
    */


    public UserDto validarCredenciales(String username, String password) {
        if(!validateByEmail(username)) {
            throw new ResourceNotFoundException("Correo de usuario no existe");
        }

        UserEntity entity =  this.repository.findByEmail(username);
        if (!password.equals(entity.getPassword())) {
            throw new ResourceNotFoundException("pasword errado");
        }

        UserDto dto = UserDto.builder()
                .id(entity.getId())
                .fullName(entity.getFullName())
                .bornDate(entity.getBornDate())
                .state(entity.getState())
                .email(entity.getEmail())
                .phone(entity.getPhone())
                .avatar(entity.getAvatar())
                .rolId(entity.getRol().getId())
                .rolName(entity.getRol().getTitle())
                .build();

        return dto;
    }




    public UserDto create(UserDto dto) {
        //No se puede registrar un usuario con un correo ya registrado
        if(validateByEmail(dto.getEmail())) {
            throw new EmailNotValidException();
        }

        //No se puede registrar un usuario sin un rol previamente registrado

        if(!rolService.existRolById(dto.getRolId())) {
            throw new ResourceNotFoundException("Roll de usuario no existe");
//            throw new ResourceNotFoundException();
        }

        UserEntity entity = new UserEntity();
        entity.setFullName(dto.getFullName());
        entity.setBornDate(dto.getBornDate());
        entity.setState(dto.getState());
        entity.setEmail(dto.getEmail());
        entity.setPhone(dto.getPhone());
        entity.setAvatar(dto.getAvatar());
        entity.setPassword(dto.getPassword());
        //entity.setPassword("1234");
        RolEntity rol = new RolEntity();
        rol.setId(dto.getRolId());
        entity.setRol(rol);
        entity = repository.save(entity);

        dto.setId(entity.getId());
        return dto;
    }

    public List<UserDto> findAll() {

        List<UserEntity> entities =  this.repository.findAll();
        List<UserDto> dtos = new ArrayList<>();

        for(int i = 0; i < entities.size(); i++) {
            UserEntity entity =  entities.get(i);

            String fullpathAvatar = Constants.PATH_UPLOAD + entity.getAvatar();

            System.out.println(fullpathAvatar);

            File archivo = new File(fullpathAvatar);
            if (archivo.exists()) {
                fullpathAvatar = Constants.STATIC_RESOURCES + "servi/files/"+entity.getAvatar();
                //fullpathAvatar = Constants.STATIC_RESOURCES + "siparqueo-webapp/assets/files/"+entity.getAvatar();

            } else {
                fullpathAvatar = Constants.STATIC_RESOURCES +  "imagenes/not-found.png";
            }

            System.out.println("Avatar - " +fullpathAvatar);

            UserDto dto = UserDto.builder()
                    .id(entity.getId())
                    .fullName(entity.getFullName())
                    .bornDate(entity.getBornDate())
                    .state(entity.getState())
                    .email(entity.getEmail())
                    .phone(entity.getPhone())
                    .avatar(entity.getAvatar())
                    //.password(entity.getPassword())
                    .rolId(entity.getRol().getId())
                    .rolName(entity.getRol().getTitle())
                    .fullpathAvatar(fullpathAvatar)
                    .build();
            dtos.add(dto);
        }

        return dtos;
    }

    public UserDto getById(Long id) {

        UserEntity entity = this.repository.findById(id).get();
        UserDto dto = UserDto.builder()
                .id(entity.getId())
                .fullName(entity.getFullName())
                .bornDate(entity.getBornDate())
                .state(entity.getState())
                .email(entity.getEmail())
                .phone(entity.getPhone())
                .avatar(entity.getAvatar())
                .rolId(entity.getRol().getId())
                .rolName(entity.getRol().getTitle())
                .build();

        return dto;
    }

    public boolean deleteById(Long id) {
        if(id <= 0) {
            return false;
        }

        if(!this.repository.findById(id).isPresent()) {
            return false;
        }

        this.repository.deleteById(id);
        return true;
    }

    public UserDto updateById(Long id, UserDto newData) {
        if(id <= 0) {
            return null;
        }

        Optional<UserEntity> optEntity = this.repository.findById(id);

        if(!optEntity.isPresent()) {
            return null;
        }

        //Ya tienen internamente el id
        UserEntity entity = optEntity.get();

        entity.setFullName(newData.getFullName());
        entity.setBornDate(newData.getBornDate());
        entity.setState(newData.getState());
        entity.setEmail(newData.getEmail());
        entity.setPhone(newData.getPhone());
        entity.setAvatar(newData.getAvatar());
       // entity.setPassword(newData.getPassword());

        RolEntity rol = new RolEntity();
        rol.setId(newData.getRolId());
        entity.setRol(rol);

        this.repository.save(entity);

        newData.setId(entity.getId());

        return newData;
    }

}
