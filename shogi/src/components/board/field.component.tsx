import React from "react";
import { FieldInterface } from "../../api/interface"
import {styles} from "./field.styles"

export function Field(props: FieldInterface) {
    return <div style={styles.rectangle}>
        {props.colIndex}
    </div>;
}