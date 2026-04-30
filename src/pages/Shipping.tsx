import { PolicyPage } from "@/components/PolicyPage";

const Shipping = () => (
  <PolicyPage title="Shipping Policy" eyebrow="Delivery">
    <p>We dispatch all orders from the United Kingdom in discreet, temperature-conscious packaging suitable for lyophilised peptides.</p>
    <h2>UK delivery</h2>
    <p>Tracked 24-hour Royal Mail Special Delivery — £6.95. Free over £150.</p>
    <h2>Europe</h2>
    <p>Tracked international shipping — from £14.95, 3–7 working days depending on destination.</p>
    <h2>Dispatch times</h2>
    <p>Orders placed before 14:00 GMT on a working day are dispatched the same day. Orders placed after this time, or at weekends, are dispatched the next working day.</p>
    <h2>Customs & duties</h2>
    <p>International customers are responsible for any local import duties, taxes or customs fees that may apply.</p>
    <h2>Lost or damaged parcels</h2>
    <p>If your parcel does not arrive or arrives damaged, please contact <a href="mailto:support@renovopeptides.com">support@renovopeptides.com</a> within 7 days of dispatch and we will resolve the issue promptly.</p>
  </PolicyPage>
);

export default Shipping;
