package com.example.TrainStation.Exception;

import javax.naming.AuthenticationException;

public class BadCredentialsException extends AuthenticationException {
    public BadCredentialsException(String msg)
    {
        super(msg);
    }

}
