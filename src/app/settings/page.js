import CustomInput from "@/components/input";

export default function Page() {
  return (
    <div className="max-w-screen-xl mx-auto py-9">
      <div className="flex flex-col justify-start items-center">
        <h3 className="font-bold text-2xl">Settings</h3>
        <div className="grid gap-4">
          <div>
            <h3>1. Data User</h3>
            <div className="flex gap-4">
              <CustomInput
                name="user-name"
                type="text"
                placeholder="Masukkan nama sesuai KTP"
                label="Nama"
              />
              <CustomInput
                name="user-phone"
                type="text"
                placeholder="Update nomor HP anda"
                label="Nomor HP"
              />
            </div>
          </div>
          <div>
            <h3>2. Data Akun User</h3>
            <div className="flex gap-4">
              <CustomInput
                name="user-gmail"
                type="email"
                placeholder="Update gmail anda"
                label="Gmail"
              />
              <div>
                <CustomInput
                  name="user-password"
                  type="password"
                  placeholder="Perbaharui sandi anda"
                  label="Password"
                />
                <p className="text-[#999CA0] text-xs">Minimal 8 karakter</p>
              </div>
            </div>
          </div>
          <div>
            <h3>3. Alamat Pelanggan</h3>
            <div className="flex gap-4">
              <CustomInput
                name="user-address"
                type="text"
                placeholder="Update alamat lengkap"
                label="Nama Jalan"
              />

              <CustomInput
                name="user-rt"
                type="text"
                placeholder="RT"
                label="RT"
              />
            </div>
            <div className="flex gap-4">
              <CustomInput
                name="user-kelurahan"
                type="text"
                placeholder="Kelurahan"
                label="Kelurahan"
              />
              <CustomInput
                name="user-rw"
                type="text"
                placeholder="RW"
                label="RW"
              />
            </div>
            <CustomInput
              name="user-pos"
              type="text"
              placeholder="Kode pos"
              label="Kode Pos"
            />
          </div>
          <div>
            <h3>4. Photo User</h3>

            <CustomInput
              name="user-image"
              type="file"
              placeholder="No File Choosen"
              label="Upload Photo Profil"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#5CB85F] rounded py-3 px-8 text-white my-4 "
        >
          Konfirmasi
        </button>
      </div>
    </div>
  );
}
