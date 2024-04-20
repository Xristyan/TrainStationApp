package com.example.TrainStation.auth;


import com.example.TrainStation.Model.Cart;
import com.example.TrainStation.Model.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String email;
    private String password;
    private Role role;
    private List<Cart> cart;
}
