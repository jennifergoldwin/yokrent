const Rincian = () => {
  return (
    <div className="rounded shadow-md p-4">
      <div className="border border-[#E7E7E7] rounded p-3 flex flex-col gap-2">
        <h3 className="font-bold text-2xl">Rincian Harga Mobil</h3>
        <div className="flex justify-between gap-8">
          <div>Tagihan rental mobil</div>
          <div>Rp 430.000</div>
        </div>
        <hr className="w-3/5 " />
        <div className="flex justify-between">
          <div>Harga untuk 1 hari:</div>
          <div>Rp 430.000</div>
        </div>
      </div>
    </div>
  );
};

export default Rincian;
