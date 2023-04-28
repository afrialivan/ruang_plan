const Plan = (plan) => {
  // console.log(plan.color)
  return (
    <div className='item bg-neutral rounded-2xl px-5 py-2 text-primary'>
      <p className="text-lg">{plan.plan.mulai.substring(8, 10)}/{plan.plan.mulai.substring(5,7)}/{plan.plan.mulai.substring(0,4)}</p>
      <h1 className="font-bold text-2xl -mb-0 -mt-1 leading-6">{plan.plan.judul} #{plan.plan.id}</h1>
      <p className="text-lg font-semibold">{plan.plan.mulai.substring(11)} WITA - {plan.plan.selesai.substring(11)} WITA</p>
    </div>
  )
}

export default Plan