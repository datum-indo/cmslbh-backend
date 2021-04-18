import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutLogRequestInput } from "../inputs/ApplicationCreateWithoutLogRequestInput";
import { ApplicationUpdateWithoutLogRequestInput } from "../inputs/ApplicationUpdateWithoutLogRequestInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpsertWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutLogRequestInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutLogRequestInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutLogRequestInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutLogRequestInput;
}
