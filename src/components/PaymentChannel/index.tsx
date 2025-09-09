import Image from "next/image";

interface PaymentChannelProps {
  channel?: string;
}

const paymentChannelLogo = {
  "7ELEVEN": "https://cdn.ancdavao.com/payment-channels/7eleven-logo.svg",
  "7ELEVEN_CLIQQ": "https://cdn.ancdavao.com/payment-channels/7eleven-logo.svg",
  BDO_EPAY:
    "https://cdn.ancdavao.com/payment-channels/dd_bdo_online_banking-logo.svg",
  DD_BDO_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/dd_bdo_online_banking-logo.svg",
  BILLEASE: "https://cdn.ancdavao.com/payment-channels/billease-logo.svg",
  DD_BOC_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/boc_online_bank-logo.svg",
  BPI_DIRECT_DEBIT:
    "https://cdn.ancdavao.com/payment-channels/dd_bpi_online_banking-logo.svg",
  DD_BPI_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/dd_bpi_online_banking-logo.svg",
  BPI_RECURRING:
    "https://cdn.ancdavao.com/payment-channels/dd_bpi_online_banking-logo.svg",
  BANK_TRANSFER:
    "https://cdn.ancdavao.com/payment-channels/bank_transfer-logo.svg",
  CARDS: "https://cdn.ancdavao.com/payment-channels/cards-logo.svg",
  CEBUANA: "https://cdn.ancdavao.com/payment-channels/cebuana-logo.svg",
  CHINABANK_DIRECT_DEBIT:
    "https://cdn.ancdavao.com/payment-channels/chinabank_direct_debit-logo.svg",
  DD_CHINABANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/chinabank_online_banking-logo.svg",
  CVM: "https://cdn.ancdavao.com/payment-channels/cvm-logo.svg",
  DP_ECPAY_LOAN: "https://cdn.ancdavao.com/payment-channels/ecpay-logo.svg",
  ECPAY_DRAGONLOAN: "https://cdn.ancdavao.com/payment-channels/ecpay-logo.svg",
  ECPAY_SCHOOL: "https://cdn.ancdavao.com/payment-channels/ecpay-logo.svg",
  GCASH: "https://cdn.ancdavao.com/payment-channels/gcash-logo.svg",
  GRABPAY: "https://cdn.ancdavao.com/payment-channels/grabpay-logo.svg",
  DD_INSTAPAY_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/instapay_online_banking-logo.svg",
  DD_LANDBANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/landbank_online_banking-logo.svg",
  LBC: "https://cdn.ancdavao.com/payment-channels/lbc-logo.svg",
  DD_MAYBANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/maybank_online_banking-logo.svg",
  DD_METROBANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/metrobank_online_banking-logo.svg",
  DP_MLHUILLIER:
    "https://cdn.ancdavao.com/payment-channels/mlhuillier-logo.svg",
  DP_PALAWAN: "https://cdn.ancdavao.com/payment-channels/palawan-logo.svg",
  PAYMAYA: "https://cdn.ancdavao.com/payment-channels/paymaya-logo.svg",
  DD_PESONET_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/pesonet_online_banking-logo.svg",
  DD_PNB_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/pnb_online_bank-logo.svg",
  DD_PSBANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/psbank_online_bank-logo.svg",
  QRPH: "https://cdn.ancdavao.com/payment-channels/qrph-logo.svg",
  RCBC_DIRECT_DEBIT:
    "https://cdn.ancdavao.com/payment-channels/rcbc_direct_debit-logo.svg",
  DD_RCBC_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/rcbc_online_banking-logo.svg",
  RD_PAWNSHOP: "https://cdn.ancdavao.com/payment-channels/rd_pawnshop-logo.svg",
  DD_ROBINSONS_BANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/robinsons_bank_online_banking-logo.svg",
  ROBINSONS_BILLS_PAYMENT:
    "https://cdn.ancdavao.com/payment-channels/robinsons_bills_payment-logo.svg",
  DD_SECURITY_BANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/security_bank_online_banking-logo.svg",
  SHOPEEPAY: "https://cdn.ancdavao.com/payment-channels/shopeepay-logo.svg",
  SM_BILLS_PAYMENT:
    "https://cdn.ancdavao.com/payment-channels/sm_bills_payment-logo.svg",
  DD_UBP: "https://cdn.ancdavao.com/payment-channels/ubp-logo.svg",
  UBP_EADA: "https://cdn.ancdavao.com/payment-channels/ubp-logo.svg",
  DD_UNIONBANK_ONLINE_BANKING:
    "https://cdn.ancdavao.com/payment-channels/unionbank_online_banking-logo.svg",
  USSC: "https://cdn.ancdavao.com/payment-channels/ussc-logo.svg",
};

export const PaymentChannel = ({ channel }: PaymentChannelProps) => {
  const logo = paymentChannelLogo[channel as keyof typeof paymentChannelLogo];

  if (!logo) return null;

  return (
    <>
      <Image
        src={logo || ""}
        alt={channel}
        width={50}
        height={50}
        className="w-12 h-12 object-contain ml-auto"
      />
    </>
  );
};
