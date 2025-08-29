import user from "./../assets/user.svg";

const Profile = () => {
  return (
    <div className="bg-white space-y-8 p-6 xl:max-w-[40%] rounded-3xl shadow-lg max-h-[400px]">
      <p className="text-medium-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
        suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis
        aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla
        finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec
        efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo
        eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae
        ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis.
        Phasellus tempor tellus eu vulputate tempus.
      </p>

      <div>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Profile;
