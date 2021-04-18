import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIncidentLocationScalarWhereInput } from "../inputs/CaseIncidentLocationScalarWhereInput";
import { CaseIncidentLocationUpdateManyMutationInput } from "../inputs/CaseIncidentLocationUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseIncidentLocationScalarWhereInput, {
    nullable: false
  })
  where!: CaseIncidentLocationScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseIncidentLocationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseIncidentLocationUpdateManyMutationInput;
}
