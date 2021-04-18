import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseDocumentCreateOrConnectWithoutCaseInput } from "../inputs/CaseDocumentCreateOrConnectWithoutCaseInput";
import { CaseDocumentCreateWithoutCaseInput } from "../inputs/CaseDocumentCreateWithoutCaseInput";
import { CaseDocumentScalarWhereInput } from "../inputs/CaseDocumentScalarWhereInput";
import { CaseDocumentUpdateManyWithWhereWithoutCaseInput } from "../inputs/CaseDocumentUpdateManyWithWhereWithoutCaseInput";
import { CaseDocumentUpdateWithWhereUniqueWithoutCaseInput } from "../inputs/CaseDocumentUpdateWithWhereUniqueWithoutCaseInput";
import { CaseDocumentUpsertWithWhereUniqueWithoutCaseInput } from "../inputs/CaseDocumentUpsertWithWhereUniqueWithoutCaseInput";
import { CaseDocumentWhereUniqueInput } from "../inputs/CaseDocumentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseDocumentUpdateManyWithoutCaseInput {
  @TypeGraphQL.Field(_type => [CaseDocumentCreateWithoutCaseInput], {
    nullable: true
  })
  create?: CaseDocumentCreateWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentCreateOrConnectWithoutCaseInput], {
    nullable: true
  })
  connectOrCreate?: CaseDocumentCreateOrConnectWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentUpsertWithWhereUniqueWithoutCaseInput], {
    nullable: true
  })
  upsert?: CaseDocumentUpsertWithWhereUniqueWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentWhereUniqueInput], {
    nullable: true
  })
  set?: CaseDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseDocumentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentUpdateWithWhereUniqueWithoutCaseInput], {
    nullable: true
  })
  update?: CaseDocumentUpdateWithWhereUniqueWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentUpdateManyWithWhereWithoutCaseInput], {
    nullable: true
  })
  updateMany?: CaseDocumentUpdateManyWithWhereWithoutCaseInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseDocumentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseDocumentScalarWhereInput[] | undefined;
}
