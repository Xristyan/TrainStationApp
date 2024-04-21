package com.example.TrainStation.Controller;


import com.example.TrainStation.Model.Cart;
import com.example.TrainStation.Model.User;
import com.example.TrainStation.Service.UserService;
import com.example.TrainStation.auth.AuthenticationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/getUserBy/email")
    public User getUserByEmail(@RequestBody AuthenticationRequest request)
    {
        return userService.getUserByEmail(request);
    }

    @PutMapping("/{id}/cart")
    public ResponseEntity<User> updateUserCart(@PathVariable int id, @RequestBody List<Cart> updatedCart)
    {
        return ResponseEntity.ok(userService.updateUserCart(id,updatedCart));
    }

}
