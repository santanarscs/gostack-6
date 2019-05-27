import React from "react";

import { Spinner } from "./styles";
import LoadingIcon from "../../assets/images/loading.svg";

export default function Loading() {
  return <Spinner src={LoadingIcon} alt="Carregando" />;
}
