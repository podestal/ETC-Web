import moment from "moment"

const Footer = () => {

    const year = moment().format('YYYY')

  return (
    <footer className="min-h-[100px] w-full flex justify-center items-center bg-black mt-12">
        <p className="text-lg text-slate-300">El Teclado de Sócrates &copy; {year}. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer