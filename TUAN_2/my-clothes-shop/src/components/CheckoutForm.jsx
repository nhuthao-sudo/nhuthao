import { useForm } from "react-hook-form";

export default function CheckoutForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(`Cảm ơn ${data.name}! Đơn hàng sẽ được giao tới ${data.address}.`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded-2xl shadow mt-4">
      <h3 className="font-bold mb-2">Thông tin thanh toán</h3>
      <input {...register("name")} placeholder="Họ tên" className="border w-full p-1 mb-2 rounded" />
      <input {...register("address")} placeholder="Địa chỉ" className="border w-full p-1 mb-2 rounded" />
      <input {...register("phone")} placeholder="Số điện thoại" className="border w-full p-1 mb-2 rounded" />
      <button type="submit" className="bg-green-500 text-white py-1 px-3 rounded">
        Thanh toán
      </button>
    </form>
  );
}
