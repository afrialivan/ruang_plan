const Plan = (plan) => {
  return (
    <div className="item bg-white rounded-lg px-2 py-2">
      <h1 className="font-bold text-lg">{plan.plan.judul}</h1>
      <p className="text-sm">Ruangan: {plan.plan.nama_ruangan}</p>
      <p className="text-sm">{plan.plan.tanggal}</p>
    </div>
  )
}

export default Plan