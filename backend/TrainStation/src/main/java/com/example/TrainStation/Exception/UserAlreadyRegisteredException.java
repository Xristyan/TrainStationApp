package com.example.TrainStation.Exception;

public class UserAlreadyRegisteredException extends RuntimeException{
    public UserAlreadyRegisteredException(String message)
    {
        super(message);
    }

}
