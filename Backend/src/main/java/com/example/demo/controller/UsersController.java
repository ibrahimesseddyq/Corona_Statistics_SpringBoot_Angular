package com.example.demo.controller;

import com.example.demo.model.AppUser;
import com.example.demo.model.Role;
import com.example.demo.services.UserServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UsersController {

    @Autowired
    private final UserServiceImpl userService;
    //creating a get mapping that retrieves all the users detail from the database
    @GetMapping("/")
    public ResponseEntity<List<AppUser>> GetUsers(){
        return ResponseEntity.ok().body(userService.getAllUsers());
    }
    //creating a get mapping that retrieves the detail of a specific user
    @GetMapping("/{userid}")
    public ResponseEntity<AppUser> GetUserById(@PathVariable("userid") Long userId){
        return ResponseEntity.ok().body(userService.getUserById(userId));

    }
    @GetMapping("username/{username}")
    public ResponseEntity<AppUser> GetUserById(@PathVariable("username") String username){
        return ResponseEntity.ok().body(userService.getUser(username));

    }
@PostMapping("/save")
    public ResponseEntity<AppUser> saveUser(@RequestBody AppUser user){
    URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("api/users/save").toUriString());
    return ResponseEntity.created(uri).body(userService.saveUser(user));
}
@GetMapping("roles")
public ResponseEntity<List<Role>> GetRoles(){
    return ResponseEntity.ok().body(userService.getAllRoles());
}

@PostMapping("role/save")
    public  ResponseEntity<Role> saveRole(@RequestBody Role role){
    URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("api/users/role/save").toUriString());
    return ResponseEntity.created(uri).body(userService.saveRole(role));
}

    @PostMapping("role/addtouser")
    public  ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form){
        userService.addRoleToUser(form.getUsername(), form.getRole());
        return ResponseEntity.ok().build();
    }



    //creating a delete mapping that deletes a specified user

    @DeleteMapping("/{userid}")
    public Long DeleteUser(@PathVariable("userid") Long userid){
        return userService.deleteUser(userid);
    }
    //creating post mapping that post the user detail in the database

    @PutMapping("/")
    public ResponseEntity<AppUser>  updateUser(@RequestBody AppUser user){
        return ResponseEntity.ok().body(userService.updateUser(user));
    }



}
@Data
class RoleToUserForm{
    private String username;
    private String role;
}