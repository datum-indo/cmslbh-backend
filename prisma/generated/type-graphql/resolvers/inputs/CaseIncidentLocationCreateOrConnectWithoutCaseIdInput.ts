import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIncidentLocationCreateWithoutCaseIdInput } from "../inputs/CaseIncidentLocationCreateWithoutCaseIdInput";
import { CaseIncidentLocationWhereUniqueInput } from "../inputs/CaseIncidentLocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationCreateOrConnectWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseIncidentLocationWhereUniqueInput, {
    nullable: false
  })
  where!: CaseIncidentLocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseIncidentLocationCreateWithoutCaseIdInput, {
    nullable: false
  })
  create!: CaseIncidentLocationCreateWithoutCaseIdInput;
}
