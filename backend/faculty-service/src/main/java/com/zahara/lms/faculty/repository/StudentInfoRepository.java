package com.zahara.lms.faculty.repository;

import com.zahara.lms.faculty.model.Faculty;
import com.zahara.lms.faculty.model.StudentInfo;
import com.zahara.lms.shared.repository.BaseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentInfoRepository extends BaseRepository<StudentInfo, Long> {
//    @Override
//    @Query(
//            "select x from #{#entityName} x where x.deleted = false "
//                    + "and (cast(x.id as string) like :search or x.email like :search "
//                    + "or x.phoneNumber like :search or x.nextOfKinPhoneNumber like :search "
//                    + "or x.academicStatus like :search or (cast(x.totalCreditsEarned as string) like :search "
//                    + "or (cast(x.totalCourses as string) like :search or x.nationality like :search "
//                    + "or x.emergencyContact like :search or x.birthPlace like :search "
//                    + "or x.maritalStatus like :search or x.scholarshipDetails like :search "
//                    + "or x.financialAidStatus like :search "
//                    + "or x.address like :search or (cast(x.GPA as string)  like :search)")
//    Page<StudentInfo> findContaining(Pageable pageable, String search);
}
