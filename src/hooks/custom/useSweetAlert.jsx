import Swal from "sweetalert2";

const useSweetAlert = () => {
  const confirmAlert = (title, text, action) => {
    return Swal.fire({
      title,
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: action,
    });
  };

  return { confirmAlert };
};

export default useSweetAlert;
