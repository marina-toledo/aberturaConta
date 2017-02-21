package com.code.aberturaConta;

import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by marinatoledo on 19/02/17.
 */
@Repository
public interface UserDAO extends JpaRepository<User, Long>{

        List<User> findByEmail(String email);

}
