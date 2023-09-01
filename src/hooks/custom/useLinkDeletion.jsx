import useSweetAlert from "./useSweetAlert";
import { deleteLink } from "../../services/linkService";

const useLinkDeletion = (setLoading, setLinks) => {
  const { confirmAlert } = useSweetAlert();

  const handleDeletion = async (id) => {
    const confirmDeletion = await confirmAlert(
      "Confirm deletion",
      "Are you sure you want to delete this link?",
      "Delete"
    );

    if (!confirmDeletion.isConfirmed) return;

    setLoading(true);
    const res = await deleteLink(id);
    res && setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
    setLoading(false);
  };

  return handleDeletion;
};

export default useLinkDeletion;
