import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
//хук для передачи данных(там где нужно получить данные, используем хук)
//возвращает данные об авторизации
function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
