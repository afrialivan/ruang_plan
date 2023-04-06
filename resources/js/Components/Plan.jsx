const Plan = (plan) => {
  console.log(plan.color)
  return (
    <div className={`item bg-${plan.color} rounded-2xl px-5 py-2 text-primary`}>
      <p className="text-lg">{plan.plan.mulai.substring(8, 10)}/{plan.plan.mulai.substring(5,7)}/{plan.plan.mulai.substring(0,4)}</p>
      <h1 className="font-bold text-2xl -mb-1 -mt-2">{plan.plan.judul}</h1>
      <p className="text-lg font-semibold">{plan.plan.mulai.substring(11)} WITA- {plan.plan.selesai.substring(11)} WITA</p>
      {/* <p className="text-sm">Ruangan: {plan.plan.nama_ruangan}</p> */}
    </div>
  )
}

export default Plan