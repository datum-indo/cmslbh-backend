import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutCaseInput } from "../inputs/ApplicationCreateWithoutCaseInput";
import { ApplicationUpdateWithoutCaseInput } from "../inputs/ApplicationUpdateWithoutCaseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpsertWithoutCaseInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutCaseInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutCaseInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutCaseInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutCaseInput;
}
