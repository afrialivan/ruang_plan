const Plan = (plan) => {
  // console.log(plan.plan.ruangan)
  return (
    <div className="w-100 bg-primary py-2 px-4 rounded-lg text-white">
      <h4 className="font-bold text-2xl">{plan.plan.judul}</h4>
      <p className="font-semibold">{plan.plan.tanggal}</p>
      <p className="">Ruangan: {plan.plan.nama_ruangan}</p>
    </div>
  )
}

export default Plan