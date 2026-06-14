export const mockOrderSummary = {
  id: "OD-1591",
  orderNumber: "OD-1591",
  material: "AL3C-AD01",
  totalQuality: 14, // labelled "Total quality" in screenshot, actually represents quantity
  salesOrganization: "ZMFG - ALPL MFG. SALE ORG.",
  salesDocumentType: "ZTSR - Service Sale W Mater",
  plant: "2800 - Mumbai Branch",
  deliveryDate: "12th, Feb 2026",
  status: "In Process"
};

export const mockOrderDetails = {
  id: "OD-1591",
  plant: "2800 - Mumbai Branch",
  salesDistrict: "T11001 - Loknath_Mukherjee",
  distributionChannel: "11 - Aluwall_Dealer",
  salesDocumentType: "ZTSR - Service Sale W Mater",
  salesOrganization: "ZMFG - ALPL MFG. SALE ORG.",
  division: "11 - ALUWALL",
  incoterm: "Delivered Duty Paid",
  paymentTerm: "20% Advance and rest before dis..."
};

export const mockOrderItems = [
  {
    id: "item-1",
    material: "AL33R-TR75-2440mmx1220mm",
    requestedQuantity: "10",
    scheduledQuantity: "10",
    confirmedQuantity: "--",
    extraQuantity: "--",
    uom: "Pieces",
    timestamp: "31st, Jan 2026 10:20 am",
    status: "Pending"
  },
  {
    id: "item-2",
    material: "IH-Paint-SDP_AD52_Test",
    requestedQuantity: "04",
    scheduledQuantity: "04",
    confirmedQuantity: "--",
    extraQuantity: "--",
    uom: "Liter",
    timestamp: "31st, Jan 2026 11:00 am",
    status: "Pending"
  }
];

export const mockCustomerDetails = {
  id: "OD-1591",
  customerReference: "OD-1591",
  orderCreatedDate: "31st, Jan 2026",
  requestedDeliveryDate: "12th, Feb 2026",
  soldTo: "Ahdityaa Enterprises",
  shipTo: "--",
  billingAddress: "Ahdityaa Enterprises, 400079.",
  shippingAddress: "India, North-East, Tripura, Dhalai, Dhalai, Andheri, 400612.",
  remarks: "--"
};

export const mockTimelineEvents = [
  {
    id: "evt-1",
    status: "In progress",
    orderId: "PO-1120",
    eventTitle: "Production Order Created",
    date: "31st, Jan 2026",
    time: "11:10 am"
  },
  {
    id: "evt-2",
    status: "In progress",
    orderId: "SO-1754",
    eventTitle: "Sales Order Created",
    date: "31st, Jan 2026",
    time: "11:00 am"
  },
  {
    id: "evt-3",
    status: "In progress",
    orderId: "STO-1250",
    eventTitle: "Stock Transfer Order Created",
    date: "31st, Jan 2026",
    time: "10:40 am"
  }
];
