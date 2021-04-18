import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutLogRequestAppInput } from "../inputs/UserUpdateOneWithoutLogRequestAppInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppUpdateWithoutLogRequestIdInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  keterangan?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutLogRequestAppInput, {
    nullable: true
  })
  appConsultation?: UserUpdateOneWithoutLogRequestAppInput | undefined;
}
