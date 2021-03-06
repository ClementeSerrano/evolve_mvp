import { PaymentTx } from "../../../../../collections";
import helpers from "../../../../../utils/helpers";

const { requestAuth } = helpers;

export default async (_, args, { user }) => {
  try {
    await requestAuth(user);

    return PaymentTx.find({});
  } catch (error) {
    throw error;
  }
};
