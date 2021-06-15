import http from '../../../services/config';

const prefix = "users";

export interface Student {
  id: string;
  name: string;
}

class StudentService {
  getAll() {
    return http.get<Student[]>(prefix);
  }

  get(id: string) {
    return http.get<Student>(`/${prefix}/${id}`);
  }

  add(data: Student) {
    return http.post<Student>(prefix, data);
  }

  update(id: string, data: Student) {
    return http.put<Student>(`/${prefix}/${id}`, data);
  }

  delete(id: string) {
    return http.delete<Student>(`/${prefix}/${id}`);
  }

}

export default new StudentService();