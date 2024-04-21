package com.example.TrainStation.Service;

import com.example.TrainStation.Model.Cart;
import com.example.TrainStation.Model.User;
import com.example.TrainStation.auth.AuthenticationRequest;

import java.util.List;

public interface UserService {
    public List<User> getAllUsers();
    public User saveUSer(User user);
    public User getUserByEmail(AuthenticationRequest request);


    public User updateUserCart(int id,List<Cart> updatedCart);


}
