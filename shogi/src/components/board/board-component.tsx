import React from "react"
import { BoardInterface } from "../../api/interface"
import { Config } from "../../api/config"
import { Stack, StackItem } from "@fluentui/react"
import { Field } from "./field.component"
import { FieldInterface } from "../../api/interface"

export function Board(props: BoardInterface) {
    const testA = [0,1,2,3,4,5,6,7,8,9];
    return <Stack>
        {
            testA.map((row, rowIndex) => {
                return <Stack horizontal>
                    {
                        testA.map((col, colIndex) => {
                            return <StackItem>
                                <Field colIndex={colIndex} rowIndex={rowIndex}></Field>
                            </StackItem>;
                        })
                    }
                </Stack>

            })
        }
        </Stack>
        
};
