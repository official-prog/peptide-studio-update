import { PolicyPage } from "@/components/PolicyPage";

const Shipping = () => (
  <PolicyPage title="Shipping & Delivery Policy" eyebrow="Delivery">
    <p>All orders are processed Monday through Friday, excluding public holidays. Orders are dispatched the following working day after payment is confirmed.</p>

    <h2>Shipping options</h2>
    <p><strong>Standard Shipping</strong> — 3–7 business days with tracking included.</p>
    <p><strong>Express Shipping</strong> — 1–2 business days with 24-hour tracked delivery.</p>

    <h2>Order tracking</h2>
    <p>All orders include a tracking number. You will receive an automatic email notification with your tracking details once your order is dispatched. Please allow 12–24 hours for tracking information to update.</p>

    <h2>Shipping restrictions</h2>
    <p>We do not ship to P.O. Boxes for certain shipping methods. We do not ship to regions where peptide research materials are restricted by local law. We reserve the right to cancel and refund orders that cannot be legally shipped to a given destination.</p>

    <h2>Address issues</h2>
    <p>Reshipping fees may apply for orders that cannot be delivered due to an incorrect address or an unavailable recipient. Please ensure your shipping address is accurate at the time of ordering.</p>

    <h2>Lost or delayed parcels</h2>
    <p>Carriers assume responsibility for packages once they have been accepted for dispatch. Packages marked as delivered by the carrier cannot be refunded without confirmation of a carrier investigation. If your parcel does not arrive, please contact <a href="mailto:support@renovopeptides.com">support@renovopeptides.com</a> and we will work to resolve the issue promptly.</p>

    <h2>International shipping & customs</h2>
    <p>International customers are responsible for any local import duties, taxes or customs fees that may apply. Delays caused by customs processing are outside our control.</p>

    <h2>Research use disclaimer</h2>
    <p>All products are for research purposes only and are not intended to diagnose, treat, cure, or prevent any disease. They are not for human or veterinary use, consumption, or injection.</p>
  </PolicyPage>
);

export default Shipping;
