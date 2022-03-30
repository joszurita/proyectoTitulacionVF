
package com.yavirac.pruebaActa.Repository;

import com.yavirac.pruebaActa.Model.Carrera;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author josue
 */
public interface CarreraRepository extends CrudRepository<Carrera, Long>{
    List<Carrera> findAll();
}

