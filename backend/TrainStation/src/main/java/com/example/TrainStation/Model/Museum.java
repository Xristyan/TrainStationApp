package com.example.TrainStation.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Museum {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride( name = "latitude", column = @Column(name = "latitude")),
            @AttributeOverride( name = "longitude", column = @Column(name = "longitude")),

    })
    private Coordinates coordinates;
    @Embedded
    @AttributeOverrides({
            @AttributeOverride( name = "en", column = @Column(name = "name_en")),
            @AttributeOverride( name = "de", column = @Column(name = "name_de")),

    })
    private Localization name;
    @Embedded
    @AttributeOverrides({
            @AttributeOverride( name = "en", column = @Column(name = "description_en")),
            @AttributeOverride( name = "de", column = @Column(name = "description_de")),

    })
    private Localization description;


}
