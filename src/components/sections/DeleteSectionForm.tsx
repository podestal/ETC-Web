import { Dialog, DialogPanel, Button } from "@tremor/react"
import { DeleteSectionData, Section } from "../../services/api/sectionsService"
import { UseMutationResult } from "@tanstack/react-query"
import useAuthStore from "../auth/Store"

interface Props {
    open: boolean,
    setOpen: (state: boolean) => void,
    deleteSection: UseMutationResult<Section, Error, DeleteSectionData> | undefined
}

const DeleteSectionForm = ({ open, setOpen, deleteSection }: Props) => {

    const access = useAuthStore(store => store.access)

  return (
    <Dialog 
        open={open}
        onClose={() => setOpen(false)}
    >
        <DialogPanel className="flex flex-col justify-center items-center gap-12">
            <h2 className="text-3xl text-center text-slate-300">Está seguro que desea eliminar artículo?</h2>
            <div className="flex justify-center items-center gap-12">
                <Button onClick={() => setOpen(false)} color="blue"><p className="text-xl">No</p></Button>
                <Button onClick={() => deleteSection?.mutate({access})} color="red"><p className="text-xl">Si</p></Button>
            </div>
        </DialogPanel>
    </Dialog>
  )
}

// onClick={() => deleteSection?.mutate({access})}

export default DeleteSectionForm