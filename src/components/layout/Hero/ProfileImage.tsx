import fotoPerfil from "../assets/fotoPerfil.png"

export function ProfileImage() {
  return (
    <img
      src={fotoPerfil}
      alt="Foto de Perfil"
      className="w-full max-w-[18rem] md:max-w-[20rem] lg:max-w-md h-auto rounded-2xl shadow-lg border-2 border-purple-800"
    />
  )
}
