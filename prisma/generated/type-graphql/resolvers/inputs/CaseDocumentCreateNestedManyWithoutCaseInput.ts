import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseDocumentCreateOrConnectWithoutCaseInput } from "../inputs/CaseDocumentCreateOrConnectWithoutCaseInput";
import { CaseDocumentCreateWithoutCaseInput } from "../inputs/CaseDocumentCreateWithoutCaseInput";
import { CaseDocumentWhereUniqueInput } from "../inputs/CaseDocumentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseDocumentCreateNestedManyWithoutCaseInput {
  @TypeGraphQL.Field(_type => [CaseDocumentCreateWithoutCaseInput], {
    nullable: true
  })
  create?: CaseDocumentCreateWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentCreateOrConnectWithoutCaseInput], {
    nullable: true
  })
  connectOrCreate?: CaseDocumentCreateOrConnectWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseDocumentWhereUniqueInput[] | undefined;
}
