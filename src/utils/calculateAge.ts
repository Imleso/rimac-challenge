export const calculateAge = (birthDateStr: string): number => {
    const [day, month, year] = birthDateStr.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day); 
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };