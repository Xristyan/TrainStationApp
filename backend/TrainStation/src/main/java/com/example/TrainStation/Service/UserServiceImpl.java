package com.example.TrainStation.Service;


import com.example.TrainStation.Model.Cart;
import com.example.TrainStation.Model.User;
import com.example.TrainStation.Repository.UserRepository;
import com.example.TrainStation.auth.AuthenticationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.amqp.RabbitConnectionDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User saveUSer(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByEmail(AuthenticationRequest request) {
        Optional<User> optionalProducts = userRepository.findByEmail(request.getEmail());
        User user = optionalProducts.get();
        return user;
    }

    @Override
    public User updateUserCart(int id, List<Cart> updatedCart) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.get();
        user.getCart().clear();

        for (Cart item : updatedCart) {
            user.getCart().add(item);
        }

        userRepository.save(user);
        return user;


    }
}
