import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLogRequestAppInput } from "../inputs/UserCreateNestedOneWithoutLogRequestAppInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppCreateWithoutLogRequestIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keterangan?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLogRequestAppInput, {
    nullable: true
  })
  appConsultation?: UserCreateNestedOneWithoutLogRequestAppInput | undefined;
}
