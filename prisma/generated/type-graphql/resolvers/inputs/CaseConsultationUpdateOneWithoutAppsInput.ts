import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseConsultationCreateOrConnectWithoutAppsInput } from "../inputs/CaseConsultationCreateOrConnectWithoutAppsInput";
import { CaseConsultationCreateWithoutAppsInput } from "../inputs/CaseConsultationCreateWithoutAppsInput";
import { CaseConsultationUpdateWithoutAppsInput } from "../inputs/CaseConsultationUpdateWithoutAppsInput";
import { CaseConsultationUpsertWithoutAppsInput } from "../inputs/CaseConsultationUpsertWithoutAppsInput";
import { CaseConsultationWhereUniqueInput } from "../inputs/CaseConsultationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseConsultationUpdateOneWithoutAppsInput {
  @TypeGraphQL.Field(_type => CaseConsultationCreateWithoutAppsInput, {
    nullable: true
  })
  create?: CaseConsultationCreateWithoutAppsInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationCreateOrConnectWithoutAppsInput, {
    nullable: true
  })
  connectOrCreate?: CaseConsultationCreateOrConnectWithoutAppsInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationUpsertWithoutAppsInput, {
    nullable: true
  })
  upsert?: CaseConsultationUpsertWithoutAppsInput | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseConsultationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CaseConsultationUpdateWithoutAppsInput, {
    nullable: true
  })
  update?: CaseConsultationUpdateWithoutAppsInput | undefined;
}
