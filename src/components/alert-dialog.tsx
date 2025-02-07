import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAlertStore } from "@/hooks/useAlertStore";

export default function AlertMessage() {
  const { title, description, isOpen, toggleMenu, alertType } = useAlertStore();
  if (!isOpen) return null;
  return (
    <AlertDialog open={isOpen} onOpenChange={toggleMenu}>
      <AlertDialogContent className={`${alertType === "success" ? "border-blue-600" : "border-red-600"}`}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-1/2">Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
