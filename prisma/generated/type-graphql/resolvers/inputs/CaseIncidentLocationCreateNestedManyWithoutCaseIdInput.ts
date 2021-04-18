import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseIncidentLocationCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseIncidentLocationCreateOrConnectWithoutCaseIdInput";
import { CaseIncidentLocationCreateWithoutCaseIdInput } from "../inputs/CaseIncidentLocationCreateWithoutCaseIdInput";
import { CaseIncidentLocationWhereUniqueInput } from "../inputs/CaseIncidentLocationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseIncidentLocationCreateNestedManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseIncidentLocationCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseIncidentLocationCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseIncidentLocationCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseIncidentLocationWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseIncidentLocationWhereUniqueInput[] | undefined;
}
