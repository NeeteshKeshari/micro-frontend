import React from "react";
import { useParams } from "react-router-dom";

export default function AccountDetail() {
  const { accountId } = useParams();
  return (
    <div className="muted">
      <strong>{accountId}</strong> is open. Swap between accounts using the inner tabs above.
    </div>
  );
}
