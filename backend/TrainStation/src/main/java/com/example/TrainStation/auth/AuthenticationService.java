package com.example.TrainStation.auth;


import com.example.TrainStation.Exception.NotFoundException;
import com.example.TrainStation.Exception.UserAlreadyRegisteredException;
import com.example.TrainStation.Model.Role;
import com.example.TrainStation.Model.User;
import com.example.TrainStation.Repository.UserRepository;
import com.example.TrainStation.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request)
{
    if(repository.existsByEmail(request.getEmail()))
    {
        throw new UserAlreadyRegisteredException("User already exists");
    }

    Role role = (request.getRole() == null) ? Role.USER : Role.ADMIN;
    var user = User.builder()
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(role)
            .cart(request.getCart())
            .build();
   repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
}
    public AuthenticationResponse authenticate(AuthenticationRequest request) throws BadCredentialsException {
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(()->new NotFoundException("User does not exists"));
        try {
             authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );


        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Bad Credentials");
        }

        var jwtToken = jwtService.generateToken(user);
        return  AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
