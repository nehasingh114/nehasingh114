import React from "react";
import { Container, Box, Text, Center } from "@chakra-ui/react";
const Withdrawal = () => {
  return (
    <Container maxW="2xl" bg="gray.400" centerContent>
      <Box padding="4" bg="blue.300" color="black" maxW="md">
        <Center>
          {" "}
          <Text>Withdrawal</Text>{" "}
        </Center>
        Filling of Withdrawal Form To make a bank transaction, you will need to
        fill out a withdrawal form to which the withdrawal slip is attached. The
        withdrawal form, as well as the deposit form, can be found at the bank’s
        teller. the process of filling out the withdrawal form is as follows:
        Fill in the date and account number for the funds you want to withdraw.
        Fill in the details for the branch. Mention the payee’s information. Add
        the amount you want to withdraw in both numerical and verbal form. Sign
        the withdrawal paper and provide the account holder’s name. A person’s
        whole name, including a middle initial, is written on a withdrawal slip.
        It is critical to write a complete address, including the Pin code if
        the slip requests one. The amount to be withdrawn is placed underneath
        the name in words. Any variation is expressed as a fraction. A fraction
        with a zero has been included when coin change is not required. A person
        signs the bank slip after filling it out in the presence of a bank
        teller. Before obtaining money, forms of identification are frequently
        presented to the bank teller. The teller completes the transaction and
        hands over the cash along with a receipt. It is also possible to use an
        ATM to withdraw money. Bank Withdrawal Slip To withdraw money from your
        saving account or current account, you’ll need a bank withdrawal form. A
        bank withdrawal slip keeps track of your withdrawal transaction details.
        This form must be completed when you visit a bank to make a withdrawal.
        You can also withdraw money by using a check or visiting an ATM. You
        will be given an ATM withdrawal slip once the funds have been withdrawn.
        Cash Withdrawal Cash Withdrawal is defined as any amount received by
        using the Debit Card or the PIN or in any way authorised by Debit
        Cardholder from an ATM, the Bank or other bank or financial institution
        for debit to the Account.
      </Box>
    </Container>
  );
};

export default Withdrawal;
