import { connectToDatabase } from "@/utils/database";

import User from "@/models/bankuser";

// LookUp user in the MongoDB database based on the first name, last name and
// phone number

export const POST = async (req, res) => {
  try {
    await connectToDatabase();
    const body = await req.body;
    const data = await new Response(body).json();

    console.log(data.mobile);
    const { mobile } = data;
    console.log("Destrukturierung: " + mobile);

    console.log(
      `Searching for user with mobile: ${mobile} and firstName: ${data.firstName} and lastName: ${data.lastName}`
    );

    const user = await User.findOne({
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
    });

    console.log("Found User: " + user);

    if (!user) {
      // return new Response("User not found", { status: 404 });
      await User.create({
        firstName: data.firstName.replace(" ", "".toLowerCase()),
        lastName: data.lastName.replace(" ", "".toLowerCase()),
        mobile: data.mobile,
        email: data.email,
      });
    }

    return new Response(JSON.stringify({ user }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
};
