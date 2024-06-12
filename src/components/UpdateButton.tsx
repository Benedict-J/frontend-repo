import { Button } from "@mui/material";

interface UpdateButtonProps {
  onClick: () => {};
}

export default function UpdateButton({ onClick }: UpdateButtonProps) {
  return (
    <Button variant="contained" onClick={onClick}>
      Update
    </Button>
  );
}
