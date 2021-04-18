import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolenceMethodCreateOrConnectWithoutCaseIdInput } from "../inputs/CaseViolenceMethodCreateOrConnectWithoutCaseIdInput";
import { CaseViolenceMethodCreateWithoutCaseIdInput } from "../inputs/CaseViolenceMethodCreateWithoutCaseIdInput";
import { CaseViolenceMethodScalarWhereInput } from "../inputs/CaseViolenceMethodScalarWhereInput";
import { CaseViolenceMethodUpdateManyWithWhereWithoutCaseIdInput } from "../inputs/CaseViolenceMethodUpdateManyWithWhereWithoutCaseIdInput";
import { CaseViolenceMethodUpdateWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseViolenceMethodUpdateWithWhereUniqueWithoutCaseIdInput";
import { CaseViolenceMethodUpsertWithWhereUniqueWithoutCaseIdInput } from "../inputs/CaseViolenceMethodUpsertWithWhereUniqueWithoutCaseIdInput";
import { CaseViolenceMethodWhereUniqueInput } from "../inputs/CaseViolenceMethodWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodUpdateManyWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => [CaseViolenceMethodCreateWithoutCaseIdInput], {
    nullable: true
  })
  create?: CaseViolenceMethodCreateWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodCreateOrConnectWithoutCaseIdInput], {
    nullable: true
  })
  connectOrCreate?: CaseViolenceMethodCreateOrConnectWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodUpsertWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  upsert?: CaseViolenceMethodUpsertWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodWhereUniqueInput], {
    nullable: true
  })
  connect?: CaseViolenceMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodWhereUniqueInput], {
    nullable: true
  })
  set?: CaseViolenceMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CaseViolenceMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodWhereUniqueInput], {
    nullable: true
  })
  delete?: CaseViolenceMethodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodUpdateWithWhereUniqueWithoutCaseIdInput], {
    nullable: true
  })
  update?: CaseViolenceMethodUpdateWithWhereUniqueWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodUpdateManyWithWhereWithoutCaseIdInput], {
    nullable: true
  })
  updateMany?: CaseViolenceMethodUpdateManyWithWhereWithoutCaseIdInput[] | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CaseViolenceMethodScalarWhereInput[] | undefined;
}
